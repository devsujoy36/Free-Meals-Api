import { ColorRing } from 'react-loader-spinner';
const Loader = () => {

    return (
        <div className="h-[90vh] flex justify-center items-center">
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={['black']}
            />
        </div>
    )
}

export default Loader