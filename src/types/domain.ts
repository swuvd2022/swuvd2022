export const projectKind = ['All', 'UXUI', '브랜딩', '출판', '영상', '기타'] as const;

export interface ProjectType {
  id: number;
  title: string;
  kind: string;
  artist: string[];
  email: string[];
  description: string;
  isImage?: boolean;
  video?: string;
}

export interface Comment {
  id: number;
  name: string;
  message: string;
  createDate: string;
}
