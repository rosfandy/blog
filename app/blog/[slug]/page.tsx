
export default function BlogPage(params: any) {
    const path = params.params.slug
    const datas = require(`@/public/${path}/${path}.json`)
    return (
        <div className="">
            <div className="">test</div>
        </div>
    )
}