using System;
using System.Collections.Generic;

namespace EmployeeAPI.Models;

public partial class Product
{
    public int ProductId { get; set; }

    public string? ProductName { get; set; }

    public string? ImageName { get; set; }

    public int? Quantity { get; set; }

    public int? Price { get; set; }

    public bool? IsFeatured { get; set; }
}
