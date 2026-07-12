import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useNavigate } from "react-router-dom"

const schema = yup.object({
  name: yup.string().required("Le nom est obligatoire"),
  price: yup
    .number()
    .typeError("Le prix doit être un nombre")
    .positive("Le prix doit être supérieur à 0")
    .required("Le prix est obligatoire"),
  category: yup.string().required("La catégorie est obligatoire"),
  image: yup
    .string()
    .url("L'URL de l'image n'est pas valide")
    .required("L'image est obligatoire"),
})

function AddProduct({ onAddProduct }) {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    onAddProduct(data)
    navigate("/")
  }

  return (
    <div className="add-product-page">
      <h2 className="section-title">Ajouter un Produit</h2>

      <form className="product-form" onSubmit={handleSubmit(onSubmit)}>

        <div className="form-group">
          <label>Nom</label>
          <input
            type="text"
            placeholder="Ex: Nike Air Max"
            {...register("name")}
            className={errors.name ? "input-error" : ""}
          />
          {errors.name && <p className="error-msg">{errors.name.message}</p>}
        </div>

        <div className="form-group">
          <label>Prix (MAD)</label>
          <input
            type="number"
            placeholder="Ex: 499"
            {...register("price")}
            className={errors.price ? "input-error" : ""}
          />
          {errors.price && <p className="error-msg">{errors.price.message}</p>}
        </div>

        <div className="form-group">
          <label>Catégorie</label>
          <select
            {...register("category")}
            className={errors.category ? "input-error" : ""}
          >
            <option value="">-- Choisir une catégorie --</option>
            <option value="Chaussures">Chaussures</option>
            <option value="Vêtements">Vêtements</option>
            <option value="Accessoires">Accessoires</option>
          </select>
          {errors.category && <p className="error-msg">{errors.category.message}</p>}
        </div>

        <div className="form-group">
          <label>URL de l'image</label>
          <input
            type="text"
            placeholder="https://exemple.com/image.jpg"
            {...register("image")}
            className={errors.image ? "input-error" : ""}
          />
          {errors.image && <p className="error-msg">{errors.image.message}</p>}
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-add">
            Ajouter le produit
          </button>
          <button type="button" className="btn-cancel" onClick={() => navigate("/")}>
            Annuler
          </button>
        </div>

      </form>
    </div>
  )
}

export default AddProduct