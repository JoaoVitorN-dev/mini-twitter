class LoadingSpinner {

    showLoading() {
        return `
            <div style="display: flex; justify-content: center; align-items: center; height: 100%">
                <i class="fa-solid fa-spinner fa-spin-pulse fa-xl" style="color: #74C0FC;"></i>
            </div>
        `
    }
}