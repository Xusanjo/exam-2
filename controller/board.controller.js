import query from "../utils/db.js";

export const getAllBoard=async(req,res)=>{
    try{
        const natija=await query("select * from board");
        res.status(200).send({status:'OK', data:natija.rows});
    }catch(error){
        console.log(err);
        res.status(500).json({message:'Enternal server error'});
    }
};

export const getOneBoard=async(req,res)=>{
    try{
        const natija=await query("select * from board where id=$1",[id]);
        res.status(200).send({status:'OK', data:natija.rows[0]});
    }catch(error){
        console.log(err);
        res.status(500).json({message:'Enternal server error'});
    }
};

export const getPutBoard=async(req,res)=>{
    try{
        const id=req.params.id;
        const natija=await query('select * from board where id=$1',[id]);
        res.status(200).send({status:"OK", data:natija.rows[0]});
    }catch(error){
        console.log(err);
        res.status(500).json({message:'Enternal server error'});
    }
};

export const CreateBoard=async(req,res)=>{
    try{
        const {title, column}=req.body;
        const natija=await query('insert into board (title,column) values ($1,$2)',
        [title,column]
        );
        res.status(200).send({status:"OK", data:natija.rows[0]});
    }catch(error){
        console.log(err);
        res.status(500).json({message:"Enternal server error"})
    }
}

export const deleteBoard=async(req,res)=>{
    try{
        const {id}=req.params;
        const board=await query('select * from board where id=$1',[id]);
        res.status(200).send({status:"OK", data:user.rows[0]});
    }catch(error){
        console.log(err);
        res.status(500).json({message:"Enternal server error"});
    }
};