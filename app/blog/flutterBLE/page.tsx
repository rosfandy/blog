import LayoutProject from '../Template'
import ServerComponent from './components/server'
import datas from '@/public/flutterBLE.json'

ServerComponent()

export default function Page() {
    const path = ["Blog", "flutterBLE"]
    const url = "/flutterBLE-thumbnail.jpg"
    return (
        <div className="">
            <div
                className="">
                <LayoutProject path={path} datas={JSON.stringify(datas)} img={url} />
            </div>
        </div>
    )
}