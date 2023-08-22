import constants from "./constants";

const store = {
    post: async ({ cmd, path }) => {
        try {
            const JSONobj = JSON.stringify({ cmd });

            const res = await fetch(`${constants.apiUrl}${path ? path : "/"}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSONobj,
            });

            if (res.ok) return await res.json();
        } catch (error) {
            console.log(error);
            return alert("서버에 이상이 있습니다.");
        }
    },
};

export default store;
