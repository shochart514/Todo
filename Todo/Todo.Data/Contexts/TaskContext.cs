using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using Todo.Entities;

namespace Todo.Data.Contexts
{
    public class TaskContext:DbContext
    {
        public DbSet<TodoItem> Tasks { get; set; }
    }
}
