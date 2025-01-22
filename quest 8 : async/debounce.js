// the class creates a debounced version of a function
class Debounce {
    constructor(fn, delay) {
        this.fn = fn;        // Store the function to be debounced
        this.delay = delay;  // Store the delay (time in milliseconds)
        this.timer = null;    // Initialize the timer (it will hold the timeout ID)
    }

    execute(...args) {
        const context = this;  // Save the context (`this`) of the instance for use in the callback
        clearTimeout(this.timer);  // Clear the previous timeout if there was one
        this.timer = setTimeout(() => {  // Set a new timeout that will call `fn` after `delay` ms
            this.fn.apply(context, args);  // Call the function with the saved context and arguments
        }, this.delay);
    }

    cancel() {
        clearTimeout(this.timer);  // Cancel the timeout if it's still pending
        this.timer = null;          // Reset the timer
    }
}

// This allows you to use Debounce like a regular function
function debounce(fn, delay) {
    const instance = new Debounce(fn, delay);  // Create an instance of the Debounce class
    return instance.execute.bind(instance);   // Return the `execute` method bound to the instance
}

// creates a debounced version of a function with additional option (leading)
class OpDebounce {
    constructor(fn, delay, options = { leading: false }) {
        this.fn = fn;          // Store the function to be debounced
        this.delay = delay;    // Store the delay (time in milliseconds)
        this.timer = null;     // Initialize the timer (it will hold the timeout ID)
        this.firstCall = true; // Flag to track if it's the first call
        this.leading = options.leading;  // Whether to execute immediately on the first call
    }

    execute(...args) {
        const context = this;  // Save the context (`this`) of the instance for use in the callback

        if (this.leading && this.firstCall) {
            this.fn.apply(context, args);  // If `leading` is true and it's the first call, invoke `fn` immediately
            this.firstCall = false;       // Set the `firstCall` flag to false to prevent further leading calls
        }

        if (this.timer) {
            clearTimeout(this.timer);  // Clear any previous timeout if there was one
        }

        this.timer = setTimeout(() => {  // Set a new timeout that will call `fn` after `delay` ms
            this.fn.apply(context, args);  // Call the function with the saved context and arguments
        }, this.delay);
    }

    cancel() {
        clearTimeout(this.timer);  // Cancel the timeout if it's still pending
        this.timer = null;          // Reset the timer
        this.firstCall = true;      // Reset the `firstCall` flag
    }
}

// This allows you to use OpDebounce like a regular function
function opDebounce(fn, delay, options = { leading: false }) {
    const instance = new OpDebounce(fn, delay, options);  // Create an instance of OpDebounce
    return instance.execute.bind(instance);  // Return the `execute` method bound to the instance
}