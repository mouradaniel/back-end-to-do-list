import { v4 as uuidV4 } from 'uuid';

class Task {
  id?: string;
  category: string;
  description: string;
  completed: boolean;
  priority: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Task };
