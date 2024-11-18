import { useParams } from "react-router-dom";

const ServicesDetails = () => {
    const params = useParams();
    console.log(params.id);

    return (
        <div>
            <p>This is Service Details Page for ID: {params.id}</p>
        </div>
    );
};

export default ServicesDetails;