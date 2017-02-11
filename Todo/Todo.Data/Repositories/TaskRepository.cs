using System;
using System.Collections.Generic;
using System.Linq;
using Todo.Data.Contexts;
using Todo.Entities;

namespace Todo.Data.Repositories
{
    public class TaskRepository:ITaskRepository
    {
        public void Create(TodoItem todoItem)
        {
            todoItem.DueDate = DateTime.Now;
            using (var context = new TaskContext())
            {
                context.Tasks.Add(todoItem);
                context.SaveChanges();
            }
        }

        public List<TodoItem> GetAll()
        {
            var items = new List<TodoItem>();
            using (var context = new TaskContext())
            {
                items = context.Tasks.ToList();
            }
            return items;
        }


        public void Update(TodoItem todoItem)
        {
            throw new NotImplementedException();
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }
    }
}