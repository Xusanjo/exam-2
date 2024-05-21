import query from "../utils/db.js";

export const getAllTask=async(req,res)=>{
    try{
        const natija=await query("select * from task");
        res.status(200).send({status:'OK', data:natija.rows});
    }catch(error){
        console.log(err);
        res.status(500).json({message:'Enternal server error'});
    }
};

export const getOneTask=async(req,res)=>{
    try{
        const natija=await query("select * from task where id=$1",[id]);
        res.status(200).send({status:'OK', data:natija.rows[0]});
    }catch(error){
        console.log(err);
        res.status(500).json({message:'Enternal server error'});
    }
};

export const getPutTask=async(req,res)=>{
    try{
        const id=req.params.id;
        const natija=await query('select * from task where id=$1',[id]);
        res.status(200).send({status:"OK", data:natija.rows[0]});
    }catch(error){
        console.log(err);
        res.status(500).json({message:'Enternal server error'});
    }
};

export const CreateTask=async(req,res)=>{
    try{
        const {board_id}=req.body;
        const natija=await query('insert into task (boardId) values ($1)',
        [boardId]
        );
        res.status(200).send({status:"OK", data:natija.rows[0]});
    }catch(error){
        console.log(err);
        res.status(500).json({message:"Enternal server error"})
    }
}

export const deleteTask=async(req,res)=>{
    try{
        const {taskid}=req.params;
        const task=await query('select * from task where id=$1',[id]);
        res.status(200).send({status:"OK", data:user.rows[0]});
    }catch(error){
        console.log(err);
        res.status(500).json({message:"Enternal server error"});
    }
};
