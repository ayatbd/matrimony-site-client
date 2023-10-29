import Container from "../Shared/Container";
import "../css/page.css";

const Finding = () => {
  return (
    <div className="bg-[#490B22] pb-1">
      <Container>
        <div className="py-10 bg-white rounded-xl px-2">
          <div>
            <h2 className="text-[#530E29] text-2xl font-bold">
              Find your right match here
            </h2>
          </div>
          <div>
            <form>
              <div className="flex items-center justify-between gap-5 pt-9">
                <div className="w-full">
                  <select className="w-full px-4 py-2 rounded-md border">
                    <option disabled selected>
                      I'm looking for
                    </option>
                    <option>Male's Biodata</option>
                    <option>Female's Biodata</option>
                  </select>
                </div>
                <div className="w-full">
                  <select className="w-full px-4 py-2 rounded-md border">
                    <option disabled selected>
                      Marital Status
                    </option>
                    <option>All</option>
                    <option>Never Married</option>
                    <option>Married</option>
                    <option>Divorced</option>
                    <option>Widow</option>
                    <option>Widower</option>
                  </select>
                </div>
                <div className="w-full">
                  <select className="w-full px-4 py-2 rounded-md border">
                    <option disabled selected>
                      Select an address
                    </option>
                    <option>English</option>
                    <option>French</option>
                  </select>
                </div>
                <div className="w-full">
                  <button className="w-full text-xl bg-[#E33283] text-white rounded-md py-2 px-6">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Finding;
