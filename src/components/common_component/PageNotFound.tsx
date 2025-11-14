interface PROP {
  noData:string
}

const PageNotFound = ({noData}:PROP) => {
  return (
  <div className="flex flex-col items-center justify-center mt-10 text-center px-4">
  <img
    src={noData}
    alt="No data found illustration"
    className="w-72 sm:w-96 mb-6 opacity-90"
  />

  <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">
    No results found
  </h1>

  <p className="text-gray-500 text-base sm:text-lg mt-2 max-w-md">
    Try adjusting your search terms or filters to find what you’re looking for.
  </p>
</div>
  )
}

export default PageNotFound
