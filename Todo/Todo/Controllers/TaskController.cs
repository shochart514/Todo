using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using Todo.Entities;
using Todo.Models;
using Todo.Data.Repositories;

namespace Todo.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class TaskController: ApiController
    {
        private readonly ITaskRepository _taskRepository;

        public TaskController(ITaskRepository taskRepository)
        {
            _taskRepository = taskRepository;
        }

        [HttpGet]
        public List<TodoItem> GetAll()
        {
            return _taskRepository.GetAll();
        }

        [System.Web.Mvc.HttpPost]
        public IHttpActionResult Create(TodoItemViewModel item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }

            _taskRepository.Create(new TodoItem()
            {
                Description = item.Description,
                DueDate = item.DueDate
            });

            return Ok();
        }
    }
}