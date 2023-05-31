interface CardDetails {
    description: string;
    link: string;
}

const card =  ({ description, link }: CardDetails)  =>{
  return (
    <div className="flex flex-col gap-4 w-full">
        <a href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
        <iframe src={link} className="h-56 w-full rounded-md object-cover"></iframe>

        <div className="mt-2">
            <dl>
            <div>
                <dt className="sr-only">TG Holdings App</dt>
                <dd className="text-sm text-gray-500">TG Holdings App</dd>
            </div>

            <div>
                <dt className="sr-only">Description</dt>
                <dd className="font-medium">{description}</dd>
            </div>
            </dl>

            <div className="mt-6 flex items-center gap-8 text-xs">
            </div>
        </div>
        </a>
    </div>
  )
}

export default card