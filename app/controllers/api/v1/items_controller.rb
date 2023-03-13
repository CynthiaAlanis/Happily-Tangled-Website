
    class Api::V1::ItemsController < ApplicationController
      before_action :set_item, only: %i[ create update destroy ]

      # GET /api/v1/items
      def index
        items = Item.all
        render json: ItemSerializer.new(items, url_options).serialized_json 
      end

      # GET /api/v1/items/:slug  
      def show
        item = Item.find_by(slug: params[:slug])
        render json: ItemSerializer.new(item, options).serialized_json
      end

      # POST /api/v1/items
      def create
        item = Item.new(item_params)

        if item.save
          render json: ItemSerializer.new(item).serialized_json
        else
          render json: { error: item.errors.messages }, status: 422
        end
      end

      # PATCH /api/v1/items/:slug
      def update
        item = Item.find_by(slug: params[:slug])

        if item.update(item_params)
          render json: ItemSerializer.new(item,options).serialized_json
        else
          render json: { error: item.errors.messages }, status: 422
        end
      end

      # DELETE /api/v1/items/:slug
      def destroy
        item = Item.find_by(slug: params[:slug])

        if item.destroy
          head :no_content
        else
          render json: { errors: item.errors}, status: 422
        end
      end


      private

      # get a specific item
      def Items
        @items ||= Items.includes(reviews: :user).find_by(slug: params[:slug])
      end

# Strong params
      def item_params
        params.require(:item).permit(:name, :image_url)
      end

# fast_jsonapi serializer
      def serializer(records, options = {})
        ItemSerializer
         .new(records, options)
        .serialized_json
      end

# Errors
      def errors(record)
        { errors: record.errors.messages }
      end
    end
  


