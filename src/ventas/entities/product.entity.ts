
import {CreateDateColumn,PrimaryGeneratedColumn, Entity, Column, UpdateDateColumn, DeleteDateColumn} from 'typeorm'

@Entity('products',{schema:'ventas'})

export class ProductEntity{
    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn(
       { name:'create_date',
        type:'timestamptz',
        default: () => 'CURRENT_TIMESTAMP'}
    )
    CreatedAt: Date;
    
    @UpdateDateColumn(
        {name:'update_table',
        type:'timestamptz',
        default: () => 'CURRENT_TIMESTAMP'}
    )
    updatedAt: Date;

    @DeleteDateColumn(
        { name:'delete_table',
         type:'timestamp',
         nullable:true}
     )
     deleteAt: Date;

    @Column('varchar',{
        name:'title',
        comment:'titulo del producto'
    })
    title: string

}