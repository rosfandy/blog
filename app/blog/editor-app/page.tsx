import LayoutProject from '../Template'
import ServerComponent from './components/server'
import datas from '@/public/editor-app/editor-app.json'

ServerComponent()

export default function Page() {
    const path = ["Blog", "editor-app"]
    const url = "/editor-app/editor-app-thumbnail.jpg"
    return (
        <div className="">
            <div
                className="">
                <LayoutProject path={path} datas={JSON.stringify(datas)} img={url} />
            </div>
        </div>
    )
}