import LayoutProject from '../Template'
import ServerComponent from './components/server'
import datas from '@/public/movielink.json'

ServerComponent()

export default function Page() {
    const path = ["Blog", "Movielink"]
    const url = "/movielink-thumnail.jpg"
    return (
        <div className="">
            <div

                className="">
                <LayoutProject path={path} datas={JSON.stringify(datas)} img={url} />

            </div>
        </div>
    )
}