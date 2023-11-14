import LayoutProject from '../Template'
import ServerComponent from './components/server'
import datas from '@/public/mysqlServer/mysqlServer.json'

ServerComponent()

export default function Page() {
    const path = ["Blog", "mysqlServer"]
    const url = "/mysqlServer/mysqlServer-thumbnail.jpg"

    return (
        <div className="">
            <div

                className="">
                <LayoutProject path={path} datas={JSON.stringify(datas)} img={url} />

            </div>
        </div>
    )
}