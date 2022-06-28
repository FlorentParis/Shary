const mongoose = require('mongoose')
const validator = require('validator')


const ModulesSchema = new mongoose.Schema({
   
    id_event : {
        type : String, 
        required:true
    },

    photos_videos : {

        is_activated : {
            type : Boolean,
            default : false
        },

        availability_time : {
            type : Date, 
            required:true
        }, 

        medias : {
            type : Map, 
            of : {
                content : { 
                    type:String
                },
                id_author : {
                    type : String, 
                    required:true
                },
                status: {
                    type: String,
                    enum: ['Pending', 'Active', 'Finish'],
                    default: 'Pending'
                }
            },
        },

        medias_display_time : {
            type : String, //remettre un Number quand on aura la soluce 
            required:true
        },

        module_display_time : {
            type : String, //remettre un Number quand on aura la soluce 
            required:true
        },

        videos : {
            type : Boolean, 
            default : false,
            required:true
        },

        loop : {
            type : Boolean, 
            default : false,
            required:true
        },
    }, 

    livre_d_or : {

        is_activated : {
            type : Boolean,
            default : false
        },

        availability_time : {
            type : Date, 
            required:true
        }, 

        videos : {
            type : Boolean,
            default : false
        },

        messages : {
            type : Map, 
            of : {
                content : {
                    message : {
                        type : String
                    }, 
                    video : {
                        type : String
                    }                    
                },

                id_author : {
                    type : String,
                    required:true
                }
            }
        }, 

        is_private : {
            type : Boolean, 
            default : true
        }

    },
    
    fresque : {

        is_activated : {
            type : Boolean,
            default : false
        },

        availability_time : {
            type : Date, 
            required:true
        }, 

        module_display_time : {
            type : String,  //remettre un Number quand on aura la soluce 
            required:true
        },

        usable_graphic_elems : {
            type : Map,
            of : {
                name : {
                    type : String,
                    required : true
                }, 

                content : {
                    type:String
                }
            }
        },

        content : {
            type : Map,
            of : {
                drawings : {
                    type: String,
                    required:true
                }, 

                graphic_elems : {
                    type : Map,
                    of : {
                        id_graphic_elems : {
                            type : String,
                            required : true
                        }
                    }
                }
                
            }
        }

    },

    playlist : {

        is_activated : {
            type : Boolean,
            default : false
        },

        availability_time : {
            type : Date, 
            required:true
        }, 

        module_display_time : {
            type : String, //remettre un Number quand on aura la soluce 
            required:true
        }, 

        authorized_users : {
            type : Boolean,
            required:true
        },

        songs : {
            type : Map,
            of : {
                    song_name : {
                        type : String,
                        required:true
                    },

                    song_author : {
                        type : String, 
                        required:true
                    },

                    submitter_id : {
                        type : String,
                        required:true
                    }
            }
        }

    }, 

    chat : {

        is_activated : {
            type : Boolean,
            default : false
        },

        messages : {
            type : Map, 
            of : {
                content : {
                    type : String,
                    required:true
                }, 

                id_author : {
                    type : String,
                    required:true
                },
            }
        }, 
    }
})

const Modules = mongoose.model('Modules', ModulesSchema)

module.exports = Modules