import { auth } from '@/auth'
import { SignIn, Users } from '@/components'

export default async function Page() {
    const session = await auth()
    if (!session) {
        return (
            <div>
                <h1>hello (please sign in)</h1>
                <SignIn />
            </div>
        )
    }
    return (
        <h1>
            hello <Users />
        </h1>
    )
}
