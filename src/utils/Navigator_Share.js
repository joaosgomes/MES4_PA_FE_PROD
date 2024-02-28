const Navigator_Share = async (title, text, url) => {
    try {
        if (navigator.share) {
            await navigator.share({ title, text, url });
            console.log("Content shared successfully");
        } else {
            console.log("Sharing not supported");
        }
    } catch (error) {
        console.error("Error sharing content:", error);

    }
};

export { Navigator_Share };