/**
 * Utility to load README files from project directories
 * This allows projects to have separate README.md files for long descriptions
 */

export async function loadProjectReadme(projectPath: string): Promise<string | null> {
  try {
    // For static export, we need to fetch from public directory
    // Try the new projects folder first, then fall back to project-readmes
    let response = await fetch(`/projects/${projectPath}/README.md`);
    
    if (!response.ok) {
      // Fallback to old location for backward compatibility
      response = await fetch(`/project-readmes/${projectPath}/README.md`);
    }
    
    if (!response.ok) {
      console.warn(`README not found for project: ${projectPath}`);
      return null;
    }
    return await response.text();
  } catch (error) {
    console.error(`Error loading README for project ${projectPath}:`, error);
    return null;
  }
}

export async function loadProjectReadmeSync(projectPath: string): Promise<string | null> {
  try {
    // Try the new projects folder first, then fall back to project-readmes
    let response = await fetch(`/projects/${projectPath}/README.md`);
    
    if (!response.ok) {
      // Fallback to old location for backward compatibility
      response = await fetch(`/project-readmes/${projectPath}/README.md`);
    }
    
    if (!response.ok) {
      return null;
    }
    return await response.text();
  } catch {
    return null;
  }
}
