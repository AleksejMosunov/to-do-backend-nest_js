interface ToDo {
  _id: string;
  title: string;
  description?: string;
  completed: boolean;
  status?: 'pending' | 'in-progress' | 'completed';
  createdAt?: Date;
  updatedAt?: Date;
  completedAt?: Date;
  authorId?: string;
}

export default ToDo;
