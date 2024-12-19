export default function SubmitButton({ loading }: { loading: boolean }) {

    return <button
        type="submit"
        disabled={loading}
        className={`py-3 mt-4 px-5 text-sm font-medium text-center text-white rounded-lg border-white border-solid border-2 transition-colors duration-300 
      ${loading ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'hover:bg-white hover:text-black'}`}
    >
        {loading ? (<div className="flex items-center justify-center">
            <svg
                className="animate-spin h-5 w-5 mr-2 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
            >
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                ></circle>
                <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 100 8H4z"
                ></path>
            </svg>
            Loading...
        </div>
        ) : <>Send message</>
        }
    </button>
}