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

AreaOfTriangle = function(v0,v1,v2)
{
    var xa,ya,za,xb,yb,zb;
    var S,xg,yg,zg;
    
    xa = v1.x-v0.x;
    ya = v1.y-v0.y;
    za = v1.z-v0.z;

    xb = v2.x-v0.x;
    yb = v2.y-v0.y;
    zb = v2.z-v0.z;

    xg = ya*zb-za*yb;
    yg = za*xb-xa*zb;
    zg = xa*yb-ya*xb;

    S = Math.sqrt(xg*xg + yg*yg + zg*zg);
    return S/2;
}
