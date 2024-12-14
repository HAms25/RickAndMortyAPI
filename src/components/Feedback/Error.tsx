interface ErrorProps {
    message: string;
  }

const Error = ({message} : ErrorProps) => {
    return (
        <div className="flex items-center justify-center h-screen bg-zinc-950 text-red-500">
      <p className="text-center text-2xl">{message}</p>
    </div>
    )
}

export default Error;