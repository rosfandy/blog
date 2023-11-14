import LayoutProject from '../Template'
import ServerComponent from './components/server'
import datas from '@/public/hocuspocus/hocuspocus.json'

ServerComponent()

export default function Page() {
    const path = ["Blog", "hocuspocus"]
    const url = "/hocuspocus/hocuspocus-thumbnail.jpg"
    return (
        <div className="">
            <div
                className="">
                <LayoutProject path={path} datas={JSON.stringify(datas)} img={url} />
            </div>
        </div>
    )
}