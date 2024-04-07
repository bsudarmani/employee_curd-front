const Navbar=()=>
{
 return(
    // <div>
    //  <div>
    //         <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
    //             <div class="container-fluid">
    //                 <a class="navbar-brand" href="">Employee</a>
    //                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //                     <span class="navbar-toggler-icon"></span>
    //                 </button>
    //                 <div class="collapse navbar-collapse" >
    //                     <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    //                         <li class="nav-item">
    //                             <a class="nav-link active" aria-current="page" href="/home">Home</a>
    //                         </li>
    //                     </ul>
    //                     <form class="d-flex">
    //                         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
    //                         <button class="btn btn-outline-success" type="submit">Search</button>
    //                     </form>
    //                 </div>
    //             </div>
    //         </nav>
    //     </div>
    // </div>
 <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
  <div className="container-fluid">
    <a className="navbar-brand" href="/home">Employee</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
 )
}
export default Navbar;