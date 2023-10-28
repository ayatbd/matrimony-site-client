import Container from "../Shared/Container";

const Finding = () => {
  return (
    <div>
      <Container>
        <div className="py-7">
          <div>
            <h2 className="text-[#530E29] text-2xl font-bold">
              Find your right match here
            </h2>
          </div>
          <div>
            <form>
              <div className="flex items-center justify-between pt-9">
                <div>
                  <select className="w-full px-4 py-2 rounded-md border">
                    <option disabled selected>
                      I'm looking for
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <div>
                  <select className="w-full px-4 py-2 rounded-md border">
                    <option disabled selected>
                      Marital Status
                    </option>
                    <option>English</option>
                    <option>French</option>
                  </select>
                </div>
                <div>
                  <select className="w-full px-4 py-2 rounded-md border">
                    <option disabled selected>
                      Select an address
                    </option>
                    <option>English</option>
                    <option>French</option>
                  </select>
                </div>
                <div>
                  <input type="btn" value="Search" />
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
