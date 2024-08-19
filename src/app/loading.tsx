
import { Spinner } from "@nextui-org/spinner";

export default function Loading() {
    return (
        <div className="flex justify-center items-center h-screen">
            <Spinner size="lg" color="primary" />
        </div>
    );
}