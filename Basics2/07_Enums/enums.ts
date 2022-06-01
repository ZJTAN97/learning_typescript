enum LoadingState {
	beforeLoad = "beforeLoad", // if not assigned, will be numerically ordered
	loading = "loading",
	loaded = "loaded",
}

const isLoading = (state: LoadingState) => state === LoadingState.loading;

// Literal Types (String examples)
function sendEvent(name: "addToCart", data: { productId: number }): void;
function sendEvent(name: "checkOut", data: { cartCount: number }): void;
function sendEvent(name: string, data: unknown): void {
    console.log(`${name}: ${JSON.stringify(data)}`);
}

sendEvent("checkOut", { cartCount: 10 })