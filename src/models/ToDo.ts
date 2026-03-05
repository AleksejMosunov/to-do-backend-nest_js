interface ToDo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  status: 'pending' | 'in-progress' | 'completed';
  createdAt: Date;
  updatedAt: Date;
  completedAt?: Date;
}

export default ToDo;
