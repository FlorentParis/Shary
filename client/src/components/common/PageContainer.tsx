export default function PageContainer(props: any) {
    return (
        <div className="page-container">
            <div>
                {props.children}
            </div>
        </div>
    )
}