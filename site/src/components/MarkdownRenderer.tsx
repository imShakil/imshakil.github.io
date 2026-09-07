'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
  content: string;
  projectReadmeFile?: string;
}

interface ChildElement {
  props?: {
    src?: string;
    children?: ChildElement[];
  };
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, projectReadmeFile }) => {
  const getImagePath = (src: string | Blob | undefined) => {
    if (!src || src instanceof Blob) return '';
    if (src.startsWith('http') || src.startsWith('/')) return src;
    if (projectReadmeFile) {
      return `/projects/${projectReadmeFile}/${src}`;
    }
    return src;
  };

  const isBadge = (src: string) => {
    return src.includes('badge') || src.includes('shields.io') || src.includes('img.shields.io');
  };

  return (
    <div className="max-w-4xl mx-auto py-6">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: (props) => (
            <h1 className="text-3xl md:text-4xl font-bold mt-8 mb-4 text-emerald-100 border-b border-emerald-500/25 pb-3 font-mono" {...props} />
          ),
          h2: (props) => (
            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-3 text-emerald-300 font-mono" {...props} />
          ),
          h3: (props) => (
            <h3 className="text-xl md:text-2xl font-semibold mt-6 mb-2 text-emerald-100" {...props} />
          ),
          h4: (props) => (
            <h4 className="text-lg md:text-xl font-semibold mt-4 mb-2 text-emerald-200" {...props} />
          ),
          p: (props) => {
            const hasBadges = props.children && Array.isArray(props.children) && 
              props.children.some((child: ChildElement) => {
                const src = child?.props?.src || child?.props?.children?.[0]?.props?.src;
                return src && isBadge(src);
              });
            
            return (
              <p className={`text-emerald-100/90 leading-relaxed mb-4 text-base ${hasBadges ? 'flex flex-wrap gap-2 items-center' : ''}`} {...props} />
            );
          },
          ul: (props) => (
            <ul className="list-disc list-inside text-emerald-100/85 mb-5 space-y-2 text-base" {...props} />
          ),
          ol: (props) => (
            <ol className="list-decimal list-inside text-emerald-100/85 mb-5 space-y-2 text-base" {...props} />
          ),
          li: (props) => (
            <li className="text-emerald-100/85 ml-2" {...props} />
          ),
          code: (props) => (
            <code
              className="bg-black/60 border border-emerald-500/30 text-emerald-300 px-2 py-0.5 rounded text-sm font-mono"
              {...(props as React.HTMLAttributes<HTMLElement>)}
            />
          ),
          pre: (props) => (
            <pre className="bg-black/80 border border-emerald-500/25 p-4 rounded-lg overflow-x-auto mb-5 text-emerald-100 font-mono text-sm leading-relaxed shadow-inner" {...props} />
          ),
          blockquote: (props) => (
            <blockquote
              className="border-l-4 border-emerald-400 bg-emerald-950/30 p-4 italic text-emerald-100/90 my-4 rounded-r"
              {...props}
            />
          ),
          a: (props) => (
            <a
              className="text-emerald-400 hover:text-emerald-200 underline underline-offset-4 transition-colors font-medium"
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            />
          ),
          img: ({ src, alt, ...props }) => {
            const imageSrc = getImagePath(src);
            const badge = isBadge(imageSrc);
            
            return (
              <img
                src={imageSrc}
                alt={alt || 'markdown-image'}
                className={badge ? 'h-auto rounded-lg my-0 inline-block' : 'max-w-full h-auto rounded-lg my-4 border border-emerald-500/20'}
                style={badge ? { maxHeight: '40px' } : {}}
                {...(props as React.ImgHTMLAttributes<HTMLImageElement>)}
              />
            );
          },
          table: (props) => (
            <div className="overflow-x-auto my-6 rounded-lg border border-emerald-500/25">
              <table className="w-full border-collapse bg-slate-950/60 text-left" {...props} />
            </div>
          ),
          thead: (props) => (
            <thead className="bg-emerald-950/50 border-b border-emerald-500/25" {...props} />
          ),
          tbody: (props) => (
            <tbody className="divide-y divide-emerald-500/15" {...props} />
          ),
          tr: (props) => (
            <tr className="border-b border-emerald-500/15 hover:bg-emerald-500/5 transition-colors" {...props} />
          ),
          td: (props) => (
            <td className="px-4 py-3 text-emerald-100/85 text-sm" {...props} />
          ),
          th: (props) => (
            <th className="px-4 py-3 text-emerald-300 font-mono text-xs uppercase tracking-wider font-semibold" {...props} />
          ),
          hr: (props) => (
            <hr className="border-emerald-500/20 my-8" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
