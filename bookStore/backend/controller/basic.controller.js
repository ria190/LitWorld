/**
 * GET/
 * homepage
 */
export const login=async(req,res)=>{
  try {
      res.render('login', { title: 'Login'} );
    } catch (error) {
      res.status(500).send({message: error.message || "Error Occured" });
    }
}
export const signup=async(req,res)=>{
  try {
    console.log("Error0");
      res.render('SignUp', { title: 'Sign Up'} );
    } catch (error) {
      res.status(500).send({message: error.message || "Error Occured" });
    }
}
export const home=async(req,res)=>{
    try {
        res.render('home', { title: 'Home-Page' } );
      } catch (error) {
        res.status(500).send({message: error.message || "Error Occured" });
      }
}
export const aboutus=async(req,res)=>{
  try {
      res.render('aboutUs', { title: 'About Us'} );
    } catch (error) {
      res.status(500).send({message: error.message || "Error Occured" });
    }
}
export const categories=async(req,res)=>{
    try {
        res.render('categories', { title: 'Categories'} );
      } catch (error) {
        res.status(500).send({message: error.message || "Error Occured" });
      }
}
export const contact=async(req,res)=>{
    try {
        res.render('contact', { title: 'Conatct-Us' } );
      } catch (error) {
        res.status(500).send({message: error.message || "Error Occured" });
      }
}
export const arts=async(req,res)=>{
  try {
      res.render('arts', { title: 'Arts & Photography' } );
    } catch (error) {
      res.status(500).send({message: error.message || "Error Occured" });
    }
}
export const humor=async(req,res)=>{
  try {
      res.render('humor', { title: 'Humor & Entertainment' } );
    } catch (error) {
      res.status(500).send({message: error.message || "Error Occured" });
    }
}
export const parenting=async(req,res)=>{
  try {
      res.render('parenting', { title: 'Parenting & Relationships' } );
    } catch (error) {
      res.status(500).send({message: error.message || "Error Occured" });
    }
}
export const politics=async(req,res)=>{
  try {
      res.render('politics', { title: 'Politics & Social Sciences' } );
    } catch (error) {
      res.status(500).send({message: error.message || "Error Occured" });
    }
}
export const teens=async(req,res)=>{
  try {
      res.render('teens', { title: 'Teen & Young Adult' } );
    } catch (error) {
      res.status(500).send({message: error.message || "Error Occured" });
    }
}



