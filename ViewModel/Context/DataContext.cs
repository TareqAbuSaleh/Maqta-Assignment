using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
namespace ViewModel.Context
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options) { }
        public DbSet<Users> Users
        {
            get;
            set;
        } 
        public DbSet<RequestOrder> RequestOrders
        {
            get;
            set;
        }
    }
}
