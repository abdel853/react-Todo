const PageContainer = ({title,children,className,hasH1}) => {
    return ( <main className="page">
        {hasH1 &&(
            <h1>{title}</h1>
        )}
        <div className={"container " + (className|| '')}>
        {children}
        </div>

    </main>
 );
}
 
export default PageContainer;