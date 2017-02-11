using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Todo.Entities;

namespace Todo.Data.Repositories
{
    public interface ITaskRepository
    {
        void Create(TodoItem todoItem);
        List<TodoItem> GetAll();
        void Update(TodoItem todoItem);
        void Delete(int id);
    }
}