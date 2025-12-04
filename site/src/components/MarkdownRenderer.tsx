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
    <div className="prose max-w-4xl mx-auto px-4 py-8 dark:prose-invert">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: (props) => (
            <h1 className="text-4xl font-bold mt-8 mb-4 text-gray-900 dark:text-sky-400" {...props} />
          ),
          h2: (props) => (
            <h2 className="text-3xl font-bold mt-6 mb-3 text-gray-800 dark:text-sky-300" {...props} />
          ),
          h3: (props) => (
            <h3 className="text-2xl font-semibold mt-5 mb-2 text-gray-700 dark:text-sky-200" {...props} />
          ),
          h4: (props) => (
            <h4 className="text-xl font-semibold mt-4 mb-2 text-gray-700 dark:text-gray-300" {...props} />
          ),
          p: (props) => {
            const hasBadges = props.children && Array.isArray(props.children) && 
              props.children.some((child: ChildElement) => {
                const src = child?.props?.src || child?.props?.children?.[0]?.props?.src;
                return src && isBadge(src);
              });
            
            return (
              <p className={`text-gray-900 dark:text-gray-300 leading-relaxed mb-4 ${hasBadges ? 'flex flex-wrap gap-2 items-center' : ''}`} {...props} />
            );
          },
          ul: (props) => (
            <ul className="list-disc list-inside text-gray-900 dark:text-gray-300 mb-4 space-y-2" {...props} />
          ),
          ol: (props) => (
            <ol className="list-decimal list-inside text-gray-900 dark:text-gray-300 mb-4 space-y-2" {...props} />
          ),
          li: (props) => (
            <li className="text-gray-900 dark:text-gray-300 ml-2" {...props} />
          ),
          code: (props) => (
            <code
              className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-sky-300 px-2 py-1 rounded text-sm font-mono"
              {...(props as React.HTMLAttributes<HTMLElement>)}
            />
          ),
          pre: (props) => (
            <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-4" {...props} />
          ),
          blockquote: (props) => (
            <blockquote
              className="border-l-4 border-gray-400 dark:border-sky-500 pl-4 italic text-gray-700 dark:text-gray-400 my-4"
              {...props}
            />
          ),
          a: (props) => (
            <a
              className="text-blue-600 dark:text-sky-400 hover:text-blue-700 dark:hover:text-sky-300 underline"
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
                className={badge ? 'h-auto rounded-lg my-0 inline-block' : 'max-w-full h-auto rounded-lg my-4'}
                style={badge ? { maxHeight: '40px' } : {}}
                {...(props as React.ImgHTMLAttributes<HTMLImageElement>)}
              />
            );
          },
          table: (props) => (
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-700 my-4" {...props} />
          ),
          thead: (props) => (
            <thead className="bg-gray-100 dark:bg-gray-800" {...props} />
          ),
          tbody: (props) => (
            <tbody {...props} />
          ),
          tr: (props) => (
            <tr className="border border-gray-300 dark:border-gray-700" {...props} />
          ),
          td: (props) => (
            <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-gray-300" {...props} />
          ),
          th: (props) => (
            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-sky-300 font-semibold" {...props} />
          ),
          hr: (props) => (
            <hr className="border-gray-300 dark:border-gray-700 my-6" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
