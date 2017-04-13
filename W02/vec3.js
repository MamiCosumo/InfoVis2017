Vec3 = function(x,y,z)
{
    this.x = x;
    this.y = y;
    this.z = z;
}


Vec3.prototype.min = function()
{
    var minv;
    if(this.x < this.y)
    {
	minv = this.x;
    }
    else
    {
	minv = this.y;
    }
    if(minv > this.z)
    {
	minv = this.z;
    }
    return minv;
}

Vec3.prototype.mid = function()
{
    var sum,maxv,minv;
    sum = this.x + this.y + this.z;
    maxv = this.max();
    minv = this.min();
    return sum - maxv - minv;
}

Vec3.prototype.max = function()
{
    var maxv;
    if(this.x > this.y)
    {
	maxv = this.x;
    }
    else
    {
	maxv = this.y;
    }
    if(maxv < this.z)
    {
	maxv = this.z;
    }
    return maxv;
}
