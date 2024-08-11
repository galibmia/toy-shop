import { useEffect } from "react";

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Toy Hub`;
    }, [title])
};

export default useTitle;