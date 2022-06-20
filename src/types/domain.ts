export const projectKind = ['All', 'UXUI', 'BX', '그래픽', '출판', '영상'] as const;

export interface ProjectType {
  id: number;
  title: string;
  kind: string;
  artist: string;
  email: string;
  description: string;
}
