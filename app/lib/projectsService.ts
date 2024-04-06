export async function fetchProjectsAPI(): Promise<Project[]> {
  const response = await fetch('http://localhost:3000/api/project');
  if (!response.ok) throw new Error("Failed to fetch projects");
  const data = await response.json();
  return data.projects as Project[];
}
