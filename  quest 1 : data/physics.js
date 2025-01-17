function getAcceleration (x){
    if (x.Δv !== undefined && x.Δt !== undefined && x.Δt !== 0) {
        return x.Δv/x.Δt;
    } else if (x.f !== undefined && x.m !== undefined && x.m !== 0) {
        return x.f/x.m;
    } else if (x.d !== undefined && x.t !== undefined && x.t !== 0) {
        return (2*(x.d))/Math.pow(x.t, 2);
    } else {
        return "impossible";
    }
}
