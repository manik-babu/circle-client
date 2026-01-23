export default async function DynamicProfile({ params }: { params: Promise<{ userId: string }> }) {

    const { userId } = await params;
    console.log({ userId })
    return (
        <div>
            <h1>Hello, {userId ? userId : "loading..."}</h1>
        </div>
    );
}