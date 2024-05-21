import query from "../utils/db.js";

export const getAllUsers=async(req,res)=>{
    try{
        const natija=await query("select * from users");
        res.status(200).send({status:'OK', data:natija.rows});
    }catch(error){
        console.log(err);
        res.status(500).json({message:'Enternal server error'});
    }
};

export const getPutUsers=async(req,res)=>{
    try{
        const id=req.params.id;
        const natija=await query('select * from users where id=$1',[id]);
        res.status(200).send({status:"OK", data:natija.rows[0]});
    }catch(error){
        console.log(err);
        res.status(500).json({message:'Enternal server error'});
    }
};

export const CreateUsers=async(req,res)=>{
    try{
        const {name, email, password}=req.body;
        const natija=await query('insert into users (name,email,password) values ($1,$2,$3)',
        [name,email,password]
        );
        res.status(200).send({status:"OK", data:natija.rows[0]});
    }catch(error){
        console.log(err);
        res.status(500).json({message:"Enternal server error"})
    }
}

export const deleteUser=async(req,res)=>{
    try{
        const {id}=req.params;
        const user=await query('select * from users where id=$1',[id]);
        res.status(200).send({status:"OK", data:user.rows[0]});
    }catch(error){
        console.log(err);
        res.status(500).json({message:"Enternal server error"});
    }
};
