// A class that implements the basic throttle functionality
class Throttle {
    constructor(fn, delay) {
        this.fn = fn; // The function to throttle (the function to be executed)
        this.delay = delay; // The delay in milliseconds to wait before allowing the next execution
        this.last = 0; // Keeps track of the last time the function was executed
    }

    // The method that is called to execute the throttled function
    execute(...args) {
        const now = +new Date(); // Current time in milliseconds
        // If enough time has passed since the last call (based on the delay), execute the function
        if (now - this.last > this.delay) {
            this.fn.apply(this, args);  // Call the original function with the provided arguments
            this.last = now;  // Update the last time the function was executed
        }
    }
}

// The throttle function that returns a throttled version of the provided function
function throttle(fn, delay) {
    const instance = new Throttle(fn, delay);  // Create an instance of Throttle class
    return instance.execute.bind(instance);  // Return the execute method bound to the instance
}

// A class that implements advanced throttle functionality with "leading" and "trailing" options
class OpThrottle {
    constructor(fn, delay, { leading = false, trailing = true } = {}) {
        this.fn = fn; // The function to throttle (the function to be executed)
        this.delay = delay; // The delay in milliseconds to wait before allowing the next execution
        this.last = 0; // Keeps track of the last time the function was executed
        this.timer = null; // A reference to the timer (for trailing executions)
        this.leading = leading; // The "leading" option determines whether the function should be executed immediately when called
        this.trailing = trailing; // The "trailing" option determines whether the function should be executed at the end of the delay
    }

    // The method that is called to execute the throttled function
    execute(...args) {
        const now = +new Date(); // Current time in milliseconds

        // If "leading" is false and it's the first call, set the "last" time to now
        if (!this.last && !this.leading) {
            this.last = now;
        }

        // If enough time has passed since the last execution (based on the delay), execute the function
        if (now - this.last > this.delay) {
            // If there was a scheduled trailing execution, cancel it
            if (this.timer) {
                clearTimeout(this.timer);
                this.timer = null;
            }
            // Execute the function with the provided arguments
            this.fn.apply(this, args);
            this.last = now; // Update the last execution time
        } else if (!this.timer && this.trailing !== false) {
            // If trailing is enabled and there isn't already a scheduled call, set a timeout to execute the function
            this.timer = setTimeout(() => {
                this.fn.apply(this, args);
                this.last = +new Date();  // Update the last time the function was executed
                this.timer = null;  // Reset the timer
            }, this.delay);
        }
    }

    // A method to cancel any pending execution (if any)
    cancel() {
        clearTimeout(this.timer); // Clear the timer
        this.timer = null;  // Reset the timer
        this.last = 0;  // Reset the last execution time
    }
}

// The opThrottle function that returns a throttled version of the provided function with "leading" and "trailing" options
function opThrottle(fn, delay, { leading = false, trailing = true } = {}){ 
    const instance = new OpThrottle(fn, delay, { leading, trailing }); // Create an instance of OpThrottle with the provided options
    return instance.execute.bind(instance);// Return the execute method bound to the instance
}