import TravelPackages from "./TravelPackages";

export default function PackagesList(packages) {
    return (
        <>
            <div className="row">
                {
                    packages.map((packages) => {
                        return (
                            <div className="col-md-3">
                                <TravelPackages />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}