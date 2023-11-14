import LayoutProject from '../Template'
import ServerComponent from './components/server'
import datas from '@/public/mysql.json'

ServerComponent()

export default function Page() {
    const path = ["Blog", "mysql-server"]
    const url = "/mysql-thumbnail.jpg"

    return (
        <div className="">
            <div

                className="">
                <LayoutProject path={path} datas={JSON.stringify(datas)} img={url} />

            </div>
        </div>
    )
}